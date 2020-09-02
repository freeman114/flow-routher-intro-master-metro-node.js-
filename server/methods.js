 Meteor.methods({

	getArticle: function(id) {
		var article = Articles.findOne({ _id: id })
		return article
  }

})