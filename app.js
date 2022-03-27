const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@email.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const { results } = await fetch("https:/randomuser.me/api").then((res) =>
        res.json()
      );
      const { name, email, gender, picture } = results[0];

      this.firstName = name.first;
      this.lastName = name.last;
      this.email = email;
      this.gender = gender;
      this.picture = picture.large;
    },
  },
});

app.mount("#app");
