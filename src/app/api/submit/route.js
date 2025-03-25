import { NextResponse } from "next/server";
import mongoose from "mongoose";

const dbConnect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
};

const ManuscriptSchema = new mongoose.Schema({
  title: String,
  author: String,
  fileUrl: String,
});
const Manuscript = mongoose.models.Manuscript || mongoose.model("Manuscript", ManuscriptSchema);

export async function POST(req) {
  await dbConnect();
  const { title, author } = await req.json();
  const newManuscript = await Manuscript.create({ title, author, fileUrl: "placeholder.pdf" });
  return NextResponse.json(newManuscript);
}
