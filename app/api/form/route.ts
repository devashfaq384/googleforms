import connect  from "@/utils/mongo";
import Form from "@/utils/models/Form";
import { NextResponse, NextRequest } from "next/server";


export async function POST(req: NextRequest) {
  try {
    await connect();
    const formdata  = await req.json();
    console.log("a",formdata)
    const savedForm = await Form.create({
      title : formdata.title,
      description : formdata.description,
      questions : formdata.questions
    });
    if(!savedForm){
      console.log("form is processing.....")
    }
    console.log("saved", savedForm);

    return NextResponse.json(
      { message: "Form Created Successfully", success: true, savedForm },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function GET() {
  try {
    await connect();
    const forms = await Form.find({});
    return NextResponse.json(
      { forms },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}