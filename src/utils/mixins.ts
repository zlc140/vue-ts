import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class MyMixin extends Vue {
    public created() {
        console.log('I`m in mixins!')
    }

}
