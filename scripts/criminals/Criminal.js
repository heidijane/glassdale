export const Criminal = (criminalObject) => {
        return `
    <div class="criminal">
        <h3>${criminalObject.name}</h3>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')} and ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
            <p>Known Associates:</p>
            <ul class="details__associates">
                ${
                    criminalObject.known_associates.map(singleAssociate => {
                        return `<li>${singleAssociate.name} was ${singleAssociate.alibi}</li>`
                    }).join("")
                }
            </ul>
            <p>Age: ${criminalObject.age}</p>
        </div>
    </div>
    `
}