import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res){

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {

        // const reqBody = await req.json()

        const prisma = new PrismaClient();


            //CREATE
            let result = await prisma.User.create({
                data: {
                    firstName: 'A',
                    middleName: 'B',
                    lastName: 'C',
                    mobile: '45545545545',
                    email: 'E@mail.com',
                    password: 'F',
                    admin: 'F',
                }
            })

            let cateGoryresult = await prisma.Category.create({
                data: {
                    title: 'A',
                    metaTitle: 'B',
                    slug: 'ccc',
                    content: 'test',
                }
            })


            let proresult = await prisma.Product.create({
                data: {
                    title: 'A',
                    metaTitle: 'B',
                    slug: 'ccc',
                    summary: 'test',

                    price: 'A',
                    discount: 'B',
                    userId: 'ccc',

                }
            })


            let proMetaresult = await prisma.ProductMeta.create({
                data: {
                    key: 'A',
                    content: 'B',
                    productId: 'ccc',
                }
            })


            let cartresult = await prisma.Cart.create({
                data: {
                    title: 'A',
                    sessionId: 'B',
                    token: 'ccc',

                    status: 'A',
                    firstName: 'B',
                    middleName: 'ccc',

                    lastName: 'A',
                    mobile: 'B',
                    email: 'ccc',

                    city: 'A',
                    country: 'B',
                    userId: 'ccc',
                }
            })
            

            let ProductReviewresult = await prisma.ProductReview.create({
                data: {
                    title: 'A',
                    rating: 'B',
                    content: 'ccc',
                    productId: 'A',
                }
            })

            let Orderresult = await prisma.Order.create({
                data: {
                    title: 'A',
                    token: 'B',
                    subTotal: 'ccc',
                    itemDiscount: 'A',

                    tax: 'A',
                    total: 'B',
                    discount: 'ccc',
                    grandTotal: 'A',

                    firstName: 'A',
                    middleName: 'B',
                    lastName: 'ccc',
                    mobile: 'A',

                    email: 'A',
                    city: 'B',
                    country: 'ccc',
                    userId: 'A',
                }
            })


            // update
            const {searchParams} = new URL(req.url)
            const id = parseInt(searchParams.get('id'))
            const reqBody = await req.json()

            let userUp = await prisma.User.update({
                where:{id:id},
                data:{
                    reqBody
                }
            })

            let CategoryUp = await prisma.Category.update({
                where:{id:id},
                data:{
                    reqBody
                }
            })

            let ProductUp = await prisma.Product.update({
                where:{id:id},
                data:{
                    reqBody
                }
            })


            let ProductMetaUp = await prisma.ProductMeta.update({
                where:{id:id},
                data:{
                    reqBody
                }
            })

            let CartUp = await prisma.Cart.update({
                where:{id:id},
                data:{
                    reqBody
                }
            })

            let ProductReviewUp = await prisma.ProductReview.update({
                where:{id:id},
                data:{
                    reqBody
                }
            })


            let OrderUp = await prisma.Order.update({
                where:{id:id},
                data:{
                    reqBody
                }
            })


            // delete

            let userDel = await prisma.User.delete({
                where:{id:id},
            })

            let CategoryDel = await prisma.Category.delete({
                where:{id:id},
            })

            let ProductDel = await prisma.Product.delete({
                where:{id:id},
            })

            let ProductMetaDel = await prisma.ProductMeta.delete({
                where:{id:id},
            })

            let CartDel = await prisma.Cart.delete({
                where:{id:id},
            })

            let ProductReviewDel = await prisma.ProductReview.delete({
                where:{id:id},
            })

            let OrderDel = await prisma.Order.delete({
                where:{id:id},
            })


            //find
            const Useres = await prisma.User.findMany();

            const Categoryes = await prisma.Category.findMany();

            const Productes = await prisma.Product.findMany();

            const ProductMetaes = await prisma.ProductMeta.findMany();

            const Cartes = await prisma.Cart.findMany();

            const ProductReviewes = await prisma.ProductReview.findMany();

            const Orderes = await prisma.Order.findMany();

   

            return NextResponse.json( {status:'Success', data: result} )
        }

        catch (e) {
            return NextResponse.json( {status:'fail',data: e} )
        }


    

    
}