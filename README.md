# Patrón High Order Component

Es una función que va a recibir un componente el cual "es mejorado" añadiendo otro componente para reutilizar el código del segundo en todos aquellos que reciban esta función.

ComponenteA => función HOC (ComponenteA) => ComponenteA + ComponenteB(recibirá datos de A mediante props)