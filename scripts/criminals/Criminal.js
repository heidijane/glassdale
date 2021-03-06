export const Criminal = (criminalObject) => {
    return `
    <div class="criminal">
        <h3>${criminalObject.name}</h3>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')} and ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
            <p>Age: ${criminalObject.age}</p>
            <button id="associates--${criminalObject.id}">Known Associates</button>
        </div>
    </div>
    `
}