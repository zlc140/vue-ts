import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class MyMixin extends Vue {
    created() {
        console.log('I`m in mixins!')
    }

}
