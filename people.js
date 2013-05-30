if (Meteor.isClient) {
    Session.set("title", "elements of style");
    Session.set("author", "Strunk & White");

    Template.book.title = function() {
            return Session.get("title");
        };
    Template.book.author = function() {
            return Session.get("author");
        };
}

