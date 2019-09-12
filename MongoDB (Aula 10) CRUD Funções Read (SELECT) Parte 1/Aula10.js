/*jshint esversion:6 */
/* */
db.bios.find (  {  "name.last":  "Hopper"  }  );

db.alunos2.findAndModify ({ 
   query :  {  _id  :  1  }, 
   atualização :  {  $set:  {  "grades.$[elem].mean":100  }  }, 
   arrayFilters :  [  {  "elem.grade":{  $gte:  85  }  }  ] 
});


var myDocument = db.bios.findOne();

if (myDocument) {
   var myName = myDocument.name;

   print (tojson(myName));
}

try {
   db.scores.findOneAndDelete(
      { "name" : "A. MacDyver" },
      { sort : { "points" : 1 }, maxTimeMS : 5 }
   );
}
catch(e){
   print(e);
}

try {
   db.scores.findOneAndReplace(
      { "score" : { $gt : 25000 } },
      { "team" : "Emphatic Rhinos", "score" : 25010 },
      { maxTimeMS: 5 }
   );
}
catch(e){
   print(e);
}

try {
   db.grades.findOneAndUpdate(
      { "name" : "A.B. Abracus" },
      { $set: { "name" : "A.B. Abracus", "assignment" : 5}, $inc : { "points" : 5 } },
      { sort: { "points" : 1 }, upsert:true, returnNewDocument : true }
   );
   }
   catch (e){
      print(e);
   }