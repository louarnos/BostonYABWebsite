<script>
export default {
  name: 'mobile',
  computed: {
      isMobile() {
            return screen.width <= 760;
        },
  }
}
</script>
