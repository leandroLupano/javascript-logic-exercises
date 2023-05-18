/* 
Can you get the loop ?

Instructions:
You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next
Notes:

do NOT mutate the nodes!
in some cases there may be only a loop, with no dangling piece
Thanks to shadchnev, I broke all of the methods from the Hash class.

Don't miss dmitry's article in the discussion after you pass the Kata !! 

*/

function loop_size(node) {
  let tortoise = node.getNext ? node.getNext() : node.next;
  let hare = node.getNext ? node.getNext() : node.next;

  // Paso 1: Encontrar el punto de encuentro entre la tortuga y la liebre
  while (hare && (hare.getNext ? hare.getNext() : hare.next)) {
    tortoise = tortoise.getNext ? tortoise.getNext() : tortoise.next;
    hare = hare.getNext ? hare.getNext().getNext() : hare.next.next;

    if (tortoise === hare) {
      break;
    }
  }

  // Si no hay un ciclo, retorna 0
  if (!hare || !(hare.getNext ? hare.getNext() : hare.next)) {
    return 0;
  }

  // Paso 2: Encontrar el inicio del ciclo
  tortoise = node.getNext ? node.getNext() : node.next;
  while (tortoise !== hare) {
    tortoise = tortoise.getNext ? tortoise.getNext() : tortoise.next;
    hare = hare.getNext ? hare.getNext() : hare.next;
  }

  // Paso 3: Calcular la longitud del ciclo
  let count = 1;
  hare = hare.getNext ? hare.getNext() : hare.next;
  while (tortoise !== hare) {
    hare = hare.getNext ? hare.getNext() : hare.next;
    count++;
  }

  return count;
}
