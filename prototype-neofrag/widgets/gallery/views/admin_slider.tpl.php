<ul class="nav nav-pills" id="pills-tab" role="tablist">
	<li class="nav-item"><a class="nav-link active" id="pills-options-tab" data-toggle="pill" href="#pills-options" role="tab" aria-controls="pills-options" aria-selected="true"><?php echo icon('fas fa-cogs').' Options' ?></a></li>
</ul>
<div class="tab-content border-light" id="pills-tabContent">
	<div class="tab-pane fade show active" id="pills-options" role="tabpanel" aria-labelledby="pills-options-tab">
		<div class="form-group row">
			<label for="settings-category" class="col-3 col-form-label"><?php echo $this->lang('Galerie') ?></label>
			<div class="col-9">
				<select class="form-control" name="settings[gallery_id]" id="settings-gallery">
					<?php foreach ($gallery as $gallery): ?>
						<option value="<?php echo $gallery['gallery_id'] ?>"<?php if ($gallery_id == $gallery['gallery_id']) echo ' selected="selected"' ?>><?php echo $gallery['title'] ?></option>
					<?php endforeach ?>
				</select>
			</div>
		</div>
	</div>
</div>
