myApp

.factory('Factory_Constants', [Constants])

function Constants() {
    var oConstants = {
        Miscellaneous: {
            LoadSuccessful: "{0} : Loaded successfully",
            SomethingWentWrong: "Sorry. Something went wrong.",
            Notification: {
                Saved: "Item Saved successfully",
                Edited: "Item Updated successfully",
                Deleted: "Item Deleted successfully",
                Removed: "Item has been removed",
                Type: {
                    Info: 'Info',
                    Danger: 'Danger',
                    Warning: 'Warning'
                }
            }
        },
        University: {
            Tabs: [
                  { link: '#/university', label: 'About' },
                  { link: '#/univdetails', label: 'Details' },
                  { link: '#/discussions', label: 'Discussions' }
            ],
            Popup: {
                CommentTitle: "Comments sections"
            }
        }
    }
    return oConstants;
}