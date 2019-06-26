<template>
    <div>
        <Editor :initial-value="EditorContent" @onChange="onChangeHandler" id="tinyMce" :init="editorInit"></Editor>
    </div>
</template>

<script lang="ts">
import 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'
import Editor from '@tinymce/tinymce-vue'
import { Component, Vue, Model, Watch, Prop } from 'vue-property-decorator'
@Component({
    components: {
        Editor,
    },
})
export default class Content extends Vue {
    @Prop(String) public EditorContent: any
    // @Prop(String) EditorPlaceholder: string;
    public initialVal: any = ''
    public editorInit: any = {
        language_url: './static/zh_CN.js',
        language: 'zh_CN',
        selector: 'textarea',
        skin_url: './static/skins/ui/oxide',
        height: 300,
        // width:600,
        images_upload_url: 'https://api.uat.iyuedian.com/iyd-imall-manage/imall/v1/upload',
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar: 'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        images_upload_handler(blobInfo: any, success: any, failure: any) {
            let xhr: any, formData: any
            xhr = new XMLHttpRequest()
            xhr.withCredentials = false
            xhr.open('POST', this.$store.state.imgUrl)
            xhr.onload = function() {
                if (xhr.status < 200 || xhr.status >= 300) {
                    failure(xhr.status)
                    return
                }
                const json = JSON.parse(xhr.responseText)
                if (json.code == 0) {
                    success(json.data[0].newFileName)
                } else {
                    failure('HTTP Error: ' + json.msg)
                }
            }
            formData = new FormData()
            formData.append('file', blobInfo.blob(), blobInfo.filename())
            xhr.send(formData)
        },
        // images_upload_url: 'https://api.iyuedian.com/iyd-imall-manage/imall/v1/upload'
    }
    // 最先开始执行
    public created(): void {
        // tinymce.init({})
    }
    // 监听路由变化
    @Watch('$route')
    public onRouteChanged(route: any, oldRoute: any): void {
        console.log(0)
        this.$forceUpdate()
    }
    /**
     * 富文本内容变化时事件
     */
    public onChangeHandler(res: any, index: any, tag: any) {
        // width height小程序不支持这个把这个替换了
        let html = res.level.content.replace('width', 'xxx')
        html = html.replace('height', 'yyy')
        // console.log(html)
        this.$emit('update:EditorContent', html)
    }
}
</script>
