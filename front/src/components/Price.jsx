import React from 'react'

const Price = () => {
    return (
        <div className="container my-5" id="tarifs">
            <h2 className="text-center">Tarifs uniques et exclusifs pour n'importes quelle tournée !</h2>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col">Adulte</th>
                        <th scope="col">Enfant</th>
                        <th scope="col">Senior</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10,00€</td>
                        <td>5,00€</td>
                        <td>7,00€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
} 

export default Price