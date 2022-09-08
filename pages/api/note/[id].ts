import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const noteId = req.query.id;

  if (req.method === 'DELETE') {
    const note = await prisma.note.delete({
      where: { id: Number(noteId) },
    });
    res.json(note);
  } else {
    console.log('Note could not be created');
  }
};

export default handler;
