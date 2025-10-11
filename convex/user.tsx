import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("userTable")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    //   if user does not exsist
    if (user?.length === 0) {
      const userData = {
        name: args.name,
        email: args.email,
        imageUrl: args.imageUrl,
      };
      await ctx.db.insert("userTable", userData);
      return userData;
    }

    //   if user exsist
    return user[0];
  },
});
