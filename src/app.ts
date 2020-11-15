type Combinable = string | number;

function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;

  return n1.toString() + ' ' + n2.toString();
}
