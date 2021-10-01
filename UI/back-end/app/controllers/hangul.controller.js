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
    // Prints "Space Ghost is a talk show host."
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

// exports.deleteLetter = (req, res) => {
//   const letter = new Letter({
//     kr: req.body.kr,
//     en: req.body.en
//   });

//   letters.findOne({ letter }, (err, letter) => {
//     if (err) {
//       res.send(500).send({ message: err });
//       return;
//     } else {
//       letter.deleteOne((err, letter) => {
//         if (err) {
//           res.status(500).send({ message: err });
//           return;
//         } else {
//           console.log(letter);
//           res.send({ message: "Letter was deleted!" });
//         }
//       });
//     }
//   });
// };
