function IcebreakerResponse(email) {
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails) {
  return emails.map(function(userData) {
    return new IcebreakerResponse(userDataata[0])
  })
}

