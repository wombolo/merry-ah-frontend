import swal from 'sweetalert';

/**
* @description class notifies users using alerts
*
* @class Notify
*/
class Notify {
  /**
  * @method notifyError
  * @memberof Notify
  * @static
  * @param {string} error
  *
  * @returns {void}
  */
  static async notifyError(error) {
    await swal('', error, 'error');
    window.location.reload();
  }

  /**
  * @method notifySuccess
  * @memberof Notify
  * @static
  * @param {string} message
  *
  * @returns {void}
  */
  static async notifySuccess(message) {
    await swal('', message, 'success');
    window.location.reload();
  }
}

export default Notify;
