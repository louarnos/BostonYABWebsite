<script>
export default {
  name: 'LocationTracker',
  data() {
      return {
          rect: {}
      }
  },
  methods: {
      getRect() {
          this.rect = this.$refs.positionTracker ? this.$refs.positionTracker.getBoundingClientRect() : {};
      },
  },
  computed: {
      inView() {
         let bounding = this.rect
         return (
             bounding.top - bounding.height <= 0
         );
      }
  },
}
</script>
