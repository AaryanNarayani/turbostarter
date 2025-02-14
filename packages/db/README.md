## Postgres Prisma Simple DB

Add other exports if needed in package.json under 
exports:{
    // Add here
}

Run : 
npx prisma migrate dev -> For creating db migrations after changing the schema
npx prisma generate -> For keeping the prisma client upto date
npx prisma studio -> GUI for db visualization