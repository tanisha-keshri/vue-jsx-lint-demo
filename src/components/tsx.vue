<script lang="tsx">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class World extends Vue {
  message = 'hello from tsx';
  render(h: any) {    
    return <div>{this.message}</div>;
  }
}
</script>
