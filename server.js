Skip to content
This repository
Search
Pull requests
Issues
Gist
 @jpecanha
 Watch 0
  Star 0
  Fork 0 jpecanha/Brastempinho
 Code  Issues 0  Pull requests 0  Projects 1  Wiki  Pulse  Graphs  Settings
Branch: master Find file Copy pathBrastempinho/server.js
f8f9cbb  an hour ago
 Jefferson S Pecanha first
0 contributors
RawBlameHistory     
33 lines (25 sloc)  676 Bytes
// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/contacts", function(req, res) {
});

app.post("/contacts", function(req, res) {
});

/*  "/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get("/contacts/:id", function(req, res) {
});

app.put("/contacts/:id", function(req, res) {
});

app.delete("/contacts/:id", function(req, res) {
});
Contact GitHub API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Status Help