//If you only want your code to affect certain screens/views, you should listen to Anguilla events like this:
$evt.addEventHandler($display, "start", onDisplayStarted);

// This callback is called when any view has finished loading
function onDisplayStarted() {

	// Open Publish Queue dialog
	Mousetrap.bind('q', function() {
			//var popup = $popup.create($cme.Popups.PUBLISH_QUEUE.URL, $cme.Popups.PUBLISH_QUEUE.FEATURES);
			//popup.open();
			$commands.executeCommand('PublishingQueue')
	});
	
	Mousetrap.bind('a', function() {
		// make tree pane wider - must click mouse in the ribbon or breadcrumb area before activating - will not work if focus is in tree or content pane
		$j('#NavigationPanel').width('350');	
	});
	
    $evt.removeEventHandler($display, "start", onDisplayStarted);
}