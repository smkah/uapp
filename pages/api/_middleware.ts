import type { NextRequest, NextResponse } from 'next/server'
import Cors from 'cors'

const cors = Cors({
    methods: ['GET', 'POST', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export default function runMiddleware(req: NextRequest, res: NextResponse, fn: any) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}