<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table striped hover :items="cats" />
  </div>
</template>

<script>
// @ は src ディレクトリのショートハンド
import cats from '@/data/cats.js'
export default {
  data () {
    return {
      cats: cats
    }
  }
}
</script>
