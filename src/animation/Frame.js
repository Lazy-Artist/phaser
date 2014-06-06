/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2014 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* A Frame is a single frame of an animation and is part of a FrameData collection.
*
* @class Phaser.Frame
* @constructor
* @param {number} index - The index of this Frame within the FrameData set it is being added to.
* @param {number} x - X position of the frame within the texture image.
* @param {number} y - Y position of the frame within the texture image.
* @param {number} width - Width of the frame within the texture image.
* @param {number} height - Height of the frame within the texture image.
* @param {string} name - The name of the frame. In Texture Atlas data this is usually set to the filename.
* @param {string} uuid - Internal UUID key.
*/
Phaser.Frame = function (index, x, y, width, height, name, uuid) {

    /**
    * @property {number} index - The index of this Frame within the FrameData set it is being added to.
    */
    this.index = index;

    /**
    * @property {number} x - X position within the image to cut from.
    */
    this.x = x;

    /**
    * @property {number} y - Y position within the image to cut from.
    */
    this.y = y;

    /**
    * @property {number} width - Width of the frame.
    */
    this.width = width;

    /**
    * @property {number} height - Height of the frame.
    */
    this.height = height;

    /**
    * @property {string} name - Useful for Texture Atlas files (is set to the filename value).
    */
    this.name = name;

    /**
    * @property {string} uuid - A link to the PIXI.TextureCache entry.
    */
    this.uuid = uuid;

    /**
    * @property {number} centerX - Center X position within the image to cut from.
    */
    this.centerX = Math.floor(width / 2);

    /**
    * @property {number} centerY - Center Y position within the image to cut from.
    */
    this.centerY = Math.floor(height / 2);

    /**
    * @property {number} distance - The distance from the top left to the bottom-right of this Frame.
    */
    this.distance = Phaser.Math.distance(0, 0, width, height);

    /**
    * @property {boolean} rotated - Rotated? (not yet implemented)
    * @default
    */
    this.rotated = false;

    /**
    * @property {string} rotationDirection - Either 'cw' or 'ccw', rotation is always 90 degrees.
    * @default 'cw'
    */
    this.rotationDirection = 'cw';

    /**
    * @property {boolean} trimmed - Was it trimmed when packed?
    * @default
    */
    this.trimmed = false;

    /**
    * @property {number} sourceSizeW - Width of the original sprite.
    */
    this.sourceSizeW = width;

    /**
    * @property {number} sourceSizeH - Height of the original sprite.
    */
    this.sourceSizeH = height;

    /**
    * @property {number} spriteSourceSizeX - X position of the trimmed sprite inside original sprite.
    * @default
    */
    this.spriteSourceSizeX = 0;

    /**
    * @property {number} spriteSourceSizeY - Y position of the trimmed sprite inside original sprite.
    * @default
    */
    this.spriteSourceSizeY = 0;

    /**
    * @property {number} spriteSourceSizeW - Width of the trimmed sprite.
    * @default
    */
    this.spriteSourceSizeW = 0;

    /**
    * @property {number} spriteSourceSizeH - Height of the trimmed sprite.
    * @default
    */
    this.spriteSourceSizeH = 0;

};

Phaser.Frame.prototype = {

    /**
    * If the frame was trimmed when added to the Texture Atlas this records the trim and source data.
    *
    * @method Phaser.Frame#setTrim
    * @param {boolean} trimmed - If this frame was trimmed or not.
    * @param {number} actualWidth - The width of the frame before being trimmed.
    * @param {number} actualHeight - The height of the frame before being trimmed.
    * @param {number} destX - The destination X position of the trimmed frame for display.
    * @param {number} destY - The destination Y position of the trimmed frame for display.
    * @param {number} destWidth - The destination width of the trimmed frame for display.
    * @param {number} destHeight - The destination height of the trimmed frame for display.
    */
    setTrim: function (trimmed, actualWidth, actualHeight, destX, destY, destWidth, destHeight) {

        this.trimmed = trimmed;

        if (trimmed)
        {
            // this.width = actualWidth;
            // this.height = actualHeight;
            this.sourceSizeW = actualWidth;
            this.sourceSizeH = actualHeight;
            this.centerX = Math.floor(actualWidth / 2);
            this.centerY = Math.floor(actualHeight / 2);
            this.spriteSourceSizeX = destX;
            this.spriteSourceSizeY = destY;
            this.spriteSourceSizeW = destWidth;
            this.spriteSourceSizeH = destHeight;
        }

    },

    /**
    * Returns a Rectangle set to the dimensions of this Frame.
    *
    * @method Phaser.Frame#getRect
    * @param {Phaser.Rectangle} [out] - A rectangle to copy the frame dimensions to.
    * @return {Phaser.Rectangle} A rectangle.
    */
    getRect: function (out) {

        if (typeof out === 'undefined')
        {
            out = new Phaser.Rectangle(this.x, this.y, this.width, this.height);
        }
        else
        {
            out.setTo(this.x, this.y, this.width, this.height);
        }

        return out;

    }

};

Phaser.Frame.prototype.constructor = Phaser.Frame;
