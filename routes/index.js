const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest, ensureLogin } = require('../middleware/auth')
const Savedproblems = require('../models/Savedproblems')

const problemlist = require('../Questions/questions')
const listofproblems = require('../Questions/final')

router.get('/', ensureGuest, (req, res) => {

    //const problemlist = quest.lean()
    res.render('login', {
        problemlist,
        // name: quest[1].name,
        // total: quest[1].total,
    })
})

router.get('/home', ensureAuth, async (req, res) => {
    try {
        const problems = await Savedproblems.find({ user: req.user.id }).sort({ createdAt: 'desc' }).lean()
        //console.log(req.user.id);
        res.render('home', {
          name: req.user.displayName,
          problems,
          problemlist,
        })
      } catch (err) {
        console.error(err)
        res.render('error/500')
      }
})

router.get('/savedproblems/add', ensureAuth, (req, res) => {

    res.render('savedproblems/add')
})

router.post('/savedproblems', ensureAuth, async (req, res) => {
    try {
      req.body.user = req.user.id
      await Savedproblems.create(req.body)
      res.redirect('/home')
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
})


router.get('/array', ensureLogin, async (req, res) => {
  try {
    const problems = await Savedproblems.find({ user: req.user.id }).lean()
    //console.log(req.user.id);
    res.render('list', {
      list: listofproblems[0].array,
      problems,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

router.get('/matrix', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[1].matrix,
       problems,
    })
})

router.get('/string', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[2].string,
       problems,
    })
})

router.get('/searching&sorting', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[3]['searching&sorting'],
       problems,
    })
})

router.get('/linkedlist', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[4].linkedlist,
       problems,
    })
})

router.get('/binarytrees', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[5].binarytress,
       problems,
    })
})

router.get('/binarysearchtrees', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[6].binarysearchtree,
       problems,
    })
})

router.get('/greedyalgorithm', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[7].greedyalgorithm,
       problems,
    })
})

router.get('/backtracking', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[8].backtracking,
       problems,
    })
})

router.get('/stacks&queues', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[9].stackandqueues,
       problems,
    })
})

router.get('/heap', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[10].heap,
       problems,
    })
})

router.get('/graph', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[11].graph,
       problems,
    })
})

router.get('/trie', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[12].trie,
       problems,
    })
})

router.get('/dp', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[13].dynamicprogramming,
       problems,
    })
})

router.get('/bitmanipulation', ensureLogin, async (req, res) => {
  const problems = await Savedproblems.find({ user: req.user.id }).lean()

    res.render('list', {
       list: listofproblems[14].bitmanipulation,
       problems,
    })
})

router.get('/error/loginfirst', (req, res) => {
  res.render('error/loginfirst')
})

module.exports = router