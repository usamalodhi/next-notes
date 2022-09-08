import React from 'react';
import { prisma } from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, content } = req.body;
  try {
    await prisma.note.create({
      data: {
        title,
        content,
      },
    });
    res.status(200).json({ message: 'Note Created' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
