import Vue from 'vue';
import DemoTsxComp from './components/tsx.vue';
import DemoJsxComp from './components/jsx.vue';

const v = new Vue({
    el: '#app',
    template: `
    <div>
        <demo-jsx-comp/>
        <demo-tsx-comp/>
    </div>
    `,
    data: {
        name: 'world',
    },
    components: {
        DemoTsxComp,
        DemoJsxComp
    },
});
