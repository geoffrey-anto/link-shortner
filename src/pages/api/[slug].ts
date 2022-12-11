import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  if (typeof slug !== "string") {
    return res.status(400).send("/?error=Invalid+Slug");
  }

  const examples = await prisma.link.findFirst({
    where: {
      slug,
    },
  });

  if (!examples) {
    return res.status(400).redirect("/?error=No+Url+Found");
  }

  const { ref } = examples;

  res.redirect(ref);

  return;
};

export default examples;
