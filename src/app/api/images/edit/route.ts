import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from 'formidable';

// 응답 데이터 타입 정의

export async function POST(request: Request) {
    console.log("in post #### ");
    const apiKey = process.env.OPENAPI_KEY;
    const formData = await request.formData();
    
    //  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const res = await fetch("https://api.openai.com/v1/images/edits", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: formData,
    });
  
    const data = await res.json();
    return Response.json(data);
  }

