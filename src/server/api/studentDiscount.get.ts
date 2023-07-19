import { StudentDiscountData } from "../../type/CircleType";

const config = useRuntimeConfig();

export default async () => {
  const result: StudentDiscountData[] = await $fetch(config.public.studentDiscount);
  return result;
};