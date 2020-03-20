export const Witness = (witnessObject) => {
    return `<div class="witness">
        <h3>${witnessObject.name}</h3>
        <p>Statement: ${witnessObject.statements}</p>
    </div>
    `
}