// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    title: "The water is turning the frogs gay",
    args: ["Placeholder argument", "Placeholder rebuttal"],
    sections: ["Pro", "Against"]
  })
}
