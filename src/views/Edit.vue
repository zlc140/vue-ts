<template>
    <div class="edit-box">

        <el-row :gutter="20">
            <Editor :EditorContent.sync="EditorContent" />
        </el-row>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import Editor from '@/components/tinymce.vue'
    @Component({
        components: {
            Editor
        }
    })
    export default class about extends Vue {

        public EditorContent: string = ''
    }
</script>
<style>
    .edit-box{
        padding: 30px;
    }
</style>
