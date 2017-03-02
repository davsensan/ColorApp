import '../../stylesheets/ColorList.scss'
import React, { PropTypes } from 'react'
import Color from './Color'

const ColorList = ({ colors=[] }) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color key={color.id}
                       {...color} />
            )
        }
    </div>

ColorList.propTypes = {
    colors: PropTypes.array
}

export default ColorList