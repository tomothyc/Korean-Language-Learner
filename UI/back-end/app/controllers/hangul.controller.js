const db = require("../models/index.js");
var Vdata = require("../mockAnswers/combined.js");

const Vocab = db.vocab;

// Adds dummy vocab data
exports.addDummyVocab = async (req, res) => {
  await Vocab.remove({});
  const createdData = await Vocab.insertMany(Vdata);
  res.send({ createdData });
  res.send({ Vdata });
};

// Get all vocab
exports.getVocab = async (req, res) => {
  Vocab.find({
    step: req.query.step,
    exercise: req.query.exercise
  }).exec((err, vocab) => {
    res.send({ vocab });
  });
};

// Add vocab
exports.addVocab = async (req, res) => {
  const hangul = new Vocab({
    step: req.body.step,
    exercise: req.body.exercise,
    kr: req.body.kr,
    en: req.body.en
  });
  console.log(hangul);
  await hangul.save((err, hangul) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.send({ message: "Letter was added!" });
    }
  });
};

exports.deleteVocab =  (req, res) => {
   Vocab.find({
    step: req.query.step,
    exercise: req.query.exercise, 
    en: req.query.en,
    kr:req.query.kr
  }).exec((err, vocab) => {
      Vocab.findOneAndRemove({step: vocab.step, exercise: vocab.exercise, en:vocab.en, kr:vocab.kr
      }, (err, vocab) => { 
        console.log(vocab)
        if (err) {
          res.status(500).send({ message: err });
          return;
        } else {
          res.send({ message: "Letter was deleted!" });
        }
      })
    })

  }
 

   
 
