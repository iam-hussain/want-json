export default function pageCalculation(query, items) {
  const current = Number(query.page || 1);
  const limit = Number(query.limit || 6);
  const total = Math.ceil(items / limit);
  const offset = ((current * limit) - limit);
  return {
    total,
    current,
    offset,
    limit,
    items,
  };
}
