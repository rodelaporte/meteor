if (Meteor.isClient) {
    Template.person.fullName = "Joe Smith";
    Template.person.job = "Developer";
    Template.person.likes = ["Bananas", "javascript", "Cars"]
}