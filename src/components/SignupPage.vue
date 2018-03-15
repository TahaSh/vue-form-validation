<template>
  <div class="signup-page">
    <div class="content">
      <signup-form
        v-if="!submitted"
        @submit="submitted = true"
      />
      <h1
        v-else
        class="message"
      >
        Done!
      </h1>
    </div>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm'

export default {
  name: 'SignupPage',
  components: { SignupForm },
  data () {
    return {
      submitted: false
    }
  }
}
</script>

<style scoped>
.signup-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: rgba(0,160,140,0.1);
}

.content {
  width: 500px;
  box-shadow: 0 2px 5px 0px rgba(0,0,0,0.2);
  padding: 40px 10px;
  background: white;
  border-radius: 2px;
}

.message {
  text-align: center;
}
</style>
