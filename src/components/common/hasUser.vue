<script>
import axios from 'axios';

export default {
  name: 'hasUser',
  computed: {
      yabName() { return localStorage.getItem('yabUsersName') },
      yabUsername() { return localStorage.getItem('yabUsername') },
      yabEmail(){ return localStorage.getItem('yabUserEmail') },
      yabToken(){ return localStorage.getItem('yabToken') },
  },
  created() {
      axios.defaults.headers.common['Authorization'] = `Bearer ${ this.yabToken }`;
  },
}
</script>
