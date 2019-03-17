<script>
export default {
  name: 'mobile',
  computed: {
      isMobile() {
            return screen.width <= 760;
      },
      picSize() {
          if ( screen.width <= 760 ) {
              return 'sm';
          } else {
              return 'md';
          }
      }
  }
}
</script>
