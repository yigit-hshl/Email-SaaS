/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /api/clerk/webhook

export const POST = async(req: Request) => {
  const {data} = await req.json()
  console.log('clerk webhook received', data)

  return new Response('Webhook received', { status:200 })
}