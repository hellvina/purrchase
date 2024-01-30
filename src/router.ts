import { Router } from 'express'

const router = Router()

/**
 * User 
 */
router.get("/user", (req, res): any => {
  res.json({ message: "user" })
});

router.get("/user/:id", (req, res) => {})

router.post("/user", (req, res) => {})

router.put("/user/:id", (req, res) => {})

router.delete("/user/:id", (req, res) => {})

/**
 * Live
 */

router.get("/live", (req, res) => {})

router.get("/live/:id", (req, res) => {})

router.post("/live", (req, res) => {})

router.put("/update/:id", (req, res) => {})

router.delete("/update/:id", (req, res) => {})

/**
 * Product
 */

router.get("/prodct", (req, res) => {})

router.get("/updatepoint/:id", (req, res) => {})

router.post("/product", (req, res) => {})

router.delete("/updatepoint/:id", (req, res) => {})

export default router;