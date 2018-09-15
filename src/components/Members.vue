<script>
import Equipe from './membros/Member';
export default {
  components: {
    Equipe
  },
  data: () => ({
    members: [
      { url: "https://unconventionalbusiness.org/wp-content/uploads/2015/11/irc-employer-FIRE-test.jpg",
        name: "Roberto Caules" },
      { url: "http://www.crescent-payroll.com/blog/wp-content/uploads/2015/03/Payroll-Manager.jpg",
        name: "Emanuelle Gomes" },
      { url: "https://media.brstatic.com/2017/09/25214757/slideshows_jobs-employment_2015_top-job-demands-to-make-of-new-employer_1-intro.jpg",
        name: "Fred Alves" },
    ]
  })
}
</script>
<template lang="pug">
  section#membros
    div.container
      equipe(
        v-for="(member, i) in members"
        :url="member.url"
        :name="member.name"
        :text="member.text"
      )
</template>
<style lang="stylus" scoped>
.container
  min-height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

</style>


