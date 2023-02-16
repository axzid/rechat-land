// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const data = await fetch("http://ppob.lc/ppob/main")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  res.status(200).json(data);
}
