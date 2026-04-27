import { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from 'cloudinary';
import multiparty from 'multiparty';

// Config Cloudinary
cloudinary.v2.config({
    cloud_name: 'dgbozvivn',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Pour pouvoir recevoir un fichier brut (FormData)
export const config = { api: { bodyParser: false } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end('Method not allowed');

    const form = new multiparty.Form();

    form.parse(req, async (err, fields, files) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!files.file?.[0]) return res.status(400).json({ error: 'No file uploaded' });

        try {
            const filePath = files.file[0].path;
            const result = await cloudinary.v2.uploader.upload(filePath, {
                folder: 'portfolio/contact',
                resource_type: 'raw', // important pour PDF
                use_filename: true,
                unique_filename: true,
                overwrite: true,
            });

            res.status(200).json({ secure_url: result.secure_url });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    });
}
