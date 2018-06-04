<script>
import CountUp from 'countup.js';
export default {
    data() {
        return {
        
        }
    },
    props:  ['to'],
    mounted() {
        new CountUp(this.$el, 0, this.to, 0, 2.5, {
            separator: '.', 
        }).start();
    },
    render () {
        return this.$scopedSlots.default({
        })
    }
}
</script>
